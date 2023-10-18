import { toast } from 'react-toastify';
import { UserInput } from 'components/GenerateModal';

const checkPostValid = (post: UserInput) => {
  if (!post.name.trim()) return toast.error('이름을 입력해주세요!');
  if (!post.content.trim()) return toast.error('내용을 입력해주세요!');
  if (!post.requiredPeople) return toast.error('인원을 입력해주세요!');
  if (!post.endDate.trim()) return toast.error('날짜를 선택해주세요!');
  if (!post.skills.length) return toast.error('기술 스택을 입력해주세요!');
  if (!post.coops.length) return toast.error('협업 툴을 입력해주세요!');
  if (!post.moods.length) return toast.error('협업 분위기를 입력해주세요!');
  if (!post.positions.length) return toast.error('모집 분야를 입력해주세요!');
  return post;
};

export default checkPostValid;
