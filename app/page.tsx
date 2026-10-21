import ClaudeShim from "./ClaudeShim";
import { bodyHtml } from "./body-html";

export default function Page() {
  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <ClaudeShim />
    </>
  );
}
