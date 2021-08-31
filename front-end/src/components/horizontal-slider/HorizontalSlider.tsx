import Button from "../common/Button";
import ButtonsContainer from "./SliderElements";

interface PropsT {
  data: LeagueT[];
  setSelectedId: (newId: number) => void;
  selectedId: number;
}
const HorizontalSlider = ({ data, selectedId, setSelectedId }: PropsT) => {
  return (
    <ButtonsContainer>
      {data.map((league, idx) => (
        <Button
          key={idx}
          height="50px"
          bgColor="#37003c"
          color="#00f783"
          borderRadius="10px"
          display="flex"
          onClick={() => setSelectedId(league.id)}
          border={league.id === selectedId}
          largeFont
        >
          {league.name}
        </Button>
      ))}
    </ButtonsContainer>
  );
};

export default HorizontalSlider;
