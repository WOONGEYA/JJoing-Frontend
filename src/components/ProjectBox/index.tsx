import * as S from "./style"
import MainImg from "../../assets/testImg.png"
const ProjectBox = ({title, subtitle, de, fe, be, iscompleted} : any) => {
    return (
        <S.Container>
            <S.MainImg src={MainImg} />
            <S.TextArea>
                <S.Title>
                    <S.T_Ttile>{title}</S.T_Ttile>
                    <S.T_SubTitle>
                        {subtitle}
                    </S.T_SubTitle>
                </S.Title>
            </S.TextArea>
            <S.Statuses>
                <S.StateArea>
                    <S.S_Ligtht></S.S_Ligtht>
                    <S.State>{iscompleted}</S.State>
                </S.StateArea>
                <S.Categories>
                    <S.Category>DE {de}명</S.Category>
                    <S.Category>FE {fe}명</S.Category>
                    <S.Category>BE {be}명</S.Category>
                </S.Categories>
            </S.Statuses>
        </S.Container>
    )
}

export default ProjectBox