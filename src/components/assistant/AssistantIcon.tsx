import { MessageSquareText } from "lucide-react";
import s from "./PandaAssistant.module.css";

export default function AssistantIcon() {
  return <span className={s.avatar} aria-hidden="true"><MessageSquareText strokeWidth={1.6} /></span>;
}
