import * as S from './style'
import dummy from 'fixtures/detail.dummy';
import MemeberIcon from 'assets/Detail/member.svg'

const ProjectBox = () => {
    const MaxDescriptionLength = 40;
    const TruncatedDescription = 
        dummy.description.length > MaxDescriptionLength
        ? dummy.description.substring(0,MaxDescriptionLength) + '...'
        : dummy.description
    return (
        <S.Container>
            <S.Image />
            <S.Info>
                <S.Title>{dummy.title}</S.Title>
                <S.Description>{TruncatedDescription}</S.Description>
                <S.Footer>
                    <S.Icon src={MemeberIcon} />
                    <S.Peoples>{dummy.currentPeople}/{dummy.requirePeople}</S.Peoples>
                </S.Footer>
            </S.Info>
        </S.Container>
    );
};

export default ProjectBox;