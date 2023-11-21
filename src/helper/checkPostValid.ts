import { toast } from 'react-toastify';
import { UserInput } from 'components/GenerateModal';

const checkPostValid = (post: UserInput) => {
  if (!post.name.trim()) {
    toast.error('프로젝트 이름을 입력해주세요!');
    return false;
  }
  if (!post.content.trim()) {
    toast.error('프로젝트 내용을 입력해주세요!');
    return false;
  }
  if (!post.requiredPeople) {
    toast.error('프로젝트 인원을 입력해주세요!');
    return false;
  }
  if (!post.endDate.trim()) {
    toast.error('프로젝트 날짜를 선택해주세요!');
    return false;
  }
  if (!post.skills.length) {
    toast.error('프로젝트 기술 스택을 입력해주세요!');
    return false;
  }
  if (!post.coops.length) {
    toast.error('프로젝트 협업 툴을 입력해주세요!');
    return false;
  }
  if (!post.moods.length) {
    toast.error('프로젝트 협업 분위기를 입력해주세요!');
    return false;
  }
  if (!post.positions.length) {
    toast.error('프로젝트 모집 분야를 입력해주세요!');
    return false;
  }
  return post;
};

export default checkPostValid;
