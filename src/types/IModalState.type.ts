export default interface IModalState {
  component: React.ReactNode;
  visible?: boolean;
  menualClose?: boolean;
  onClose?: () => void;
}
