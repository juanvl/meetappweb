import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdCameraAlt } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';
import * as S from './styles';

export default function BannerInput({ error }) {
  const { defaultValue, registerField } = useField('file');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: 'file_id',
        ref: inputRef.current,
        path: 'dataset.file',
      });
    }
  }, [inputRef]); //eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const res = await api.post('files', data);
    const { id, url } = res.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <S.Container error={error}>
      <label htmlFor="file">
        {preview ? (
          <img src={preview} alt="Meetup banner" />
        ) : (
          <>
            <MdCameraAlt size={20} color="#fff" />
            Selecionar imagem
          </>
        )}

        <input
          type="file"
          id="file"
          accept="image/*"
          ref={inputRef}
          data-file={file}
          onChange={handleChange}
        />
      </label>
    </S.Container>
  );
}

BannerInput.propTypes = {
  error: PropTypes.bool,
};

BannerInput.defaultProps = {
  error: false,
};
