import * as S from './style'
import dummy from 'fixtures/Detail/dummy';
import MemeberIcon from 'assets/Detail/member.svg'

const ProjectBox = () => {
    return (
        <S.Container>
            <S.Image />
            <S.Info>
                <S.Title>{dummy.title}</S.Title>
                <S.Description>{dummy.description + '...'}</S.Description>
                <S.Footer>
                    <S.Icon src={MemeberIcon} />
                    <S.Peoples>{dummy.currentPeople}/{dummy.requirePeople}</S.Peoples>
                </S.Footer>
            </S.Info>
        </S.Container>
    );
};

export default ProjectBox;