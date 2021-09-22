import TableWidget from "../common/widgets/TableWidget";
import { LeagueInfo } from "./WidgetElements";

interface PropsT {
  selectedId: number;
}

const LeagueWidgets = ({ selectedId }: PropsT) => {
  return (
    <LeagueInfo>
      <TableWidget selectedId={selectedId} />
      <h1>s</h1>
    </LeagueInfo>
  );
};

export default LeagueWidgets;
