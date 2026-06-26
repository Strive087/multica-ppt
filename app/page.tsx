import { PresentationShell } from "@/components/presentation/presentation-shell";
import { slides } from "@/content/slides";

export default function HomePage() {
  return <PresentationShell slides={slides} />;
}
