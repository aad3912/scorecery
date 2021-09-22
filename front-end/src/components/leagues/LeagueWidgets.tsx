import StandingsWidget from "../widgets/standings/Standings";
import { LeagueInfo } from "./WidgetElements";

interface PropsT {
  selectedId: number;
}

const LeagueWidgets = ({ selectedId }: PropsT) => {
  return (
    <LeagueInfo>
      <StandingsWidget selectedId={selectedId} />
      <h1>s</h1>
    </LeagueInfo>
  );
};

export default LeagueWidgets;
