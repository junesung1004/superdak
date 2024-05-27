import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #f7f4f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: #7f7f7f;
  padding: 20px;

  .brand-info-wrap {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 2.5;

    .company-content-wrap {
      font-size: 0.9rem;
      p {
        cursor: pointer;
      }
    }
  }

  .customer-service-wrap {
    display: flex;
    gap: 2px;
    flex-direction: column;
    flex: 1;
    font-size: 0.9rem;
    h2,
    h1,
    p {
      cursor: pointer;
    }
  }

  .comunity-wrap {
    display: flex;
    gap: 30px;
    flex: 1;
    font-size: 0.9rem;
    .comunity-1 {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        cursor: pointer;
      }
    }
    .comunity-2 {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .brand-info-wrap {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 20px;
      flex: 2.5;

      .company-content-wrap {
        font-size: 0.9rem;
        p {
          cursor: pointer;
        }
      }
    }

    .customer-service-wrap {
      display: none;
    }

    .comunity-wrap {
      display: none;
    }
  }
`;
