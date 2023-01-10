import styled from "styled-components";

export const CardContainer = styled.div`
    width: 276px;
    height: 241px;
    text-align: left;
    img{
        width: 276px;
        height: 153px;
    }

    .card-text{
        h3, p{
            font-size: 14px;
            font-weight: 400;
        }
        h3{
            margin: 5px 0;
            line-height: 16px;
        }
        p{
            color: #606060;

        }
        .favorite{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
    }

`