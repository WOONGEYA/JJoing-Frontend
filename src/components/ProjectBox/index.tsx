import * as S from "./style"
import MainImg from "../../assets/testImg.png"
const ProjectBox = () => {
    return (
        <S.Container>
            <S.MainImg src={MainImg} />
            <S.TextArea>
                <S.Title>
                    <S.T_Ttile>프로젝트 이름</S.T_Ttile>
                    <S.T_SubTitle>
                        간단한 프로젝트 소개글입니다. 마라탕이랑 탕후루
                    </S.T_SubTitle>
                </S.Title>
            </S.TextArea>
            <S.Statuses>
                <S.StateArea>
                    <S.S_Ligtht></S.S_Ligtht>
                    <S.State>모집중</S.State>
                </S.StateArea>
                <S.Categories>
                    <S.Category>DE 0명</S.Category>
                    <S.Category>FE 0명</S.Category>
                    <S.Category>BE 0명</S.Category>
                </S.Categories>
            </S.Statuses>
        </S.Container>
    )
}

export default ProjectBox