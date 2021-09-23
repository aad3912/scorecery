import Loading from "../../common/Loading";
import { FixturesContainer, FixturesH1 } from "./FixturesElements";

interface PropsT {
  fixtures: MatchesResponseT[];
}

const Fixtures = ({ fixtures }: PropsT) => {
  return fixtures.length ? (
    <FixturesContainer>
      <FixturesH1>Fixtures</FixturesH1>
    </FixturesContainer>
  ) : (
    <Loading smallFont>Coming soon...</Loading>
  );
};

export default Fixtures;
