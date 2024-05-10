import styled from "styled-components";

export const StyledList = styled.section`
    width: 90%;
    max-width: 600px;
    margin: 40px auto 100px auto;
    background-color: #ffffff;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #DDDDDD;

    form{
        display: flex;
        column-gap: 10px;
        margin-bottom: 10px;
        
        input{
            flex-grow: 1;
            height: 54px;
            box-sizing: border-box;
            border-radius: 5px;
            padding-left: 10px;
            border: solid 1px #cccccc;
            font-size: 18px;

        }

        button{
            font-size: 18px;
            width: 105px;
            background-color: #001D29;
            color: #ffffff;
            border-radius: 5px;
            border: none;
            cursor: pointer;

            &:hover{
                background-color: #014217;
            }

            &:active{
                transform: scale(0.95);
            }

            &:disabled{
                background-color: #666666;
                opacity: 0.5;
                pointer-events: none;

            }
        }


   
    }


`