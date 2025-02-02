import type { FunctionComponent } from "preact";
import type { ExtensionData } from "../../../extension/types/ExtensionData";
import Tile from "./Tile";

const TranslationsTile: FunctionComponent<ExtensionData["translations"]> = ({
  languages,
  strings,
  defaultLocale
}) => (
  <Tile title="Translations" cssClass="translations" modal={createModalOptions}>
    <table>
      <tbody>
        <tr>
          <td class="count">{languages.length}</td>
          <td>Languages</td>
        </tr>
        <tr>
          <td class="count">{strings}</td>
          <td>Strings</td>
        </tr>
        <tr>
          <td>{defaultLocale ?? "-"}</td>
          <td>Default Locale</td>
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
