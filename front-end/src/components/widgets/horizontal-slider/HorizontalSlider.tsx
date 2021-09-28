import Button from "../../common/Button";
import { InnerSlider, SliderContainer } from "./SliderElements";

interface PropsT {
  data: LeagueDataT[];
  setSelectedId: (newId: number) => void;
  selectedId: number;
}
const HorizontalSlider = ({ data, selectedId, setSelectedId }: PropsT) => {
  return (
    <SliderContainer>
      <InnerSlider>
        {data.map((league) => (
          <Button
            key={league._id}
            height="50px"
            bgColor="#37003c"
            color="#00f783"
            borderRadius="10px"
            display="flex"
            onClick={() => setSelectedId(league._id)}
            border={league._id === selectedId}
            largeFont
          >
            {league.name}
          </Button>
        ))}
      </InnerSlider>
    </SliderContainer>
  );
};

export default HorizontalSlider;
