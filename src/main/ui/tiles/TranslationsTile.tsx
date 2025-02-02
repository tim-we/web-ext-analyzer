import type { FunctionComponent } from "preact";
import type { ExtensionData } from "../../../extension/types/ExtensionData";
import Tile from "./Tile";

const TranslationsTile: FunctionComponent<ExtensionData["translations"]> = ({
  languages,
  strings
}) => (
  <Tile title="Translations" cssClass="translations" modal={createModalOptions}>
    <table>
      <tbody>
        <tr>
          <td>{languages.length}</td>
          <td>Languages</td>
        </tr>
        <tr>
          <td>{strings}</td>
          <td>Strings</td>
        </tr>
      </tbody>
    </table>
  </Tile>
);

export default TranslationsTile;

function createModalOptions() {
  return {
    title: "Meta Information",
    content: "Not yet implemented."
  };
}
