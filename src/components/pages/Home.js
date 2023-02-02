import { FcMultipleSmartphones } from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <FcMultipleSmartphones size={280}></FcMultipleSmartphones>
    </div>
  );
}
