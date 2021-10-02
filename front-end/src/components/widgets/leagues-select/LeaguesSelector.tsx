import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
interface PropsT {
  options: SelectOption[];
  setter: React.Dispatch<React.SetStateAction<SelectOption[]>>;
}

const LeaguesSelector = ({ options, setter }: PropsT) => {
  return (
    <Select
      components={animatedComponents}
      isMulti
      onChange={(newValue) => setter(newValue as SelectOption[])}
      options={options}
    />
  );
};

export default LeaguesSelector;
