

const Bio = ({ text }) => {
  // Splitting the text into an array of lines
  const lines = text.split('\n');

  // Mapping over each line to create separate <p> elements
  const bioParagraphs = lines.map((line, index) => (
    <p key={index} className="bio-paragraph">{line}</p>
  ));

  return <>{bioParagraphs}</>;
};

export default Bio;