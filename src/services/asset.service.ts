import { Icons } from "@/helpers";
import add from "@/assets/icons/add.svg";
import arrowDownLight from "@/assets/icons/arrow-down-light.svg";
import arrowLeftLight from "@/assets/icons/arrow-left-light.svg";
import bagLight from "@/assets/icons/bag-light.svg";
import bookmark from "@/assets/icons/bookmark.svg";
import chatBubbles from "@/assets/icons/chat-bubbles.svg";
import chatBubblesLight from "@/assets/icons/chat-bubbles-light.svg";
import clock from "@/assets/icons/clock.svg";
import closeLight from "@/assets/icons/close-light.svg";
import document from "@/assets/icons/document.svg";
import dots from "@/assets/icons/dots.svg";
import linked from "@/assets/icons/linked.svg";
import listLight from "@/assets/icons/list-light.svg";
import pencil from "@/assets/icons/pencil.svg";
import personLight from "@/assets/icons/person-light.svg";
import personDark from "@/assets/icons/person-dark.svg";
import person from "@/assets/icons/person.svg";
import quicks from "@/assets/icons/quicks.svg";
import search from "@/assets/icons/search.svg";
import searchLight from "@/assets/icons/search-light.svg";
import squareCheckedLight from "@/assets/icons/square-checked-light.svg";
import squareLight from "@/assets/icons/square-light.svg";
import star from "@/assets/icons/star.svg";
import todo from "@/assets/icons/todo.svg";
import todoLight from "@/assets/icons/todo-light.svg";
import close from "@/assets/icons/close.svg";
import arrowLeft from "@/assets/icons/arrow-left.svg";

const icons: Icons = {
  "add": add,
  "arrow-down-light": arrowDownLight,
  "arrow-left-light": arrowLeftLight,
  "bag-light": bagLight,
  "bookmark": bookmark,
  "chat-bubbles": chatBubbles,
  "chat-bubbles-light": chatBubblesLight,
  "clock": clock,
  "close-light": closeLight,
  "document": document,
  "dots": dots,
  "linked": linked,
  "list-light": listLight,
  "pencil": pencil,
  "person-dark": personDark,
  "person-light": personLight,
  "person": person,
  "quicks": quicks,
  "search": search,
  "search-light": searchLight,
  "square-checked-light": squareCheckedLight,
  "square-light": squareLight,
  "star": star,
  "todo": todo,
  "todo-light": todoLight,
  "close": close,
  "arrow-left": arrowLeft,
};

interface AssetService {
  getIcons(key: keyof Icons): string;
}

export default function createAssetService(): AssetService {
  return {
    getIcons(key) {
      return icons[key];
    },
  };
}

