// components/Summary.tsx
type SummaryProps = {
  summary: string;
};

const Summary: React.FC<SummaryProps> = ({ summary }) => (
  <p>{summary}</p>
);

export default Summary;