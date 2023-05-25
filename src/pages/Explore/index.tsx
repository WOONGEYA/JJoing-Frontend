import ProjectBox from "components/ProjectBox"
import Header from "components/Header/index"
import * as S from "./style"
import select from "../../assets/select.svg"

const Explore = () => {
    return (
        <>
            <Header />
            <S.Container>
                <S.Categories>
                    <S.C_Title>All</S.C_Title>
                    <S.C_Select>
                        <S.S_inner>
                            모집중
                            <S.selctIcon src={select}/>
                        </S.S_inner>
                        <S.S_inner>
                            백엔드
                            <S.selctIcon src={select}/>
                        </S.S_inner>
                        <S.S_inner>
                            최신순
                            <S.selctIcon src={select}/>
                        </S.S_inner>
                    </S.C_Select>
                </S.Categories>
                <S.Contents>
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                </S.Contents>
            </S.Container>
        </>
    )
}

export default Explore