import styled from "styled-components";

export const StyleLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  .description {
    flex: 1;
    padding-right: 5rem;
    h2 {
      font-weight: lighter;
    }
  }
  .image {
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
  .hide {
    overflow: hidden;
  }
`;