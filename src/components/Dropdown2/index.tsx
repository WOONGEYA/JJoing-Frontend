import React from 'react';
import DropIcon from 'assets/DropIcon';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { sortProject2 } from 'apis/recoil';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  currentOption?: string | undefined;
  options: string[];
  isOpened: boolean;
}

const Dropdown2 = ({
  currentOption,
  options,
  isOpened,
  id,
  ...rest
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = React.useState(currentOption);

  const [projectSort2, setProjectSort2] = useRecoilState(sortProject2);
  const handleOptionValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.currentTarget;
    if (textContent === null) return;
    setSelectedOption(textContent);
    setProjectSort2(textContent);
  };

  return (
    <S.DropdownContainer id={id} {...rest}>
      <S.Container>
        <S.DropdownWrapper>
          <S.CurrentOption>{selectedOption}</S.CurrentOption>
          <DropIcon isOpened={isOpened} />
        </S.DropdownWrapper>
      </S.Container>
      {isOpened && (
        <S.Options>
          {options.map((option) => (
            <S.Option key={option} onClick={handleOptionValue}>
              {option}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown2;
