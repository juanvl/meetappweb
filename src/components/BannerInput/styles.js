import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  border-radius: 4px;
  width: 100%;
  font-size: 18px;
  color: #fff;

  label {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    img {
      max-height: 260px;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
