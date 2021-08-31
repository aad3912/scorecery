type numInPx = `${number}px`;
type numInPct = `${number}%`;

interface GetParamsT {
  current?: "true" | "false";
  code?: string;
}

interface LeagueT {
  name: string;
  id: number;
  country: { name: string; code: string };
}
