export default interface IModalState {
  component: React.ReactNode;
  visible?: boolean;
  manualClose?: boolean;
  onClose?: () => void;
}
