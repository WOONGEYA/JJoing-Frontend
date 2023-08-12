import React from 'react';
import DropIcon from 'assets/DropIcon';
import * as S from './style';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  currentOption?: string | undefined;
  options: string[];
  isOpened: boolean;
}

const Dropdown = ({
  currentOption,
  options,
  isOpened,
  id,
  ...rest
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = React.useState(currentOption);

  const handleOptionValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.currentTarget;
    if (textContent === null) return;
    setSelectedOption(textContent);
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

export default Dropdown;
