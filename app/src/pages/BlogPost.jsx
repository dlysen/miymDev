import StaticHeader from "../components/StaticHeader.jsx";
import SettingsPanel from "../components/SettingsPanel.jsx";
import raw from "../sections/blogpost-route.html?raw";

export default function BlogPost() {
  return (
    <div className="page">
      <StaticHeader />
      <SettingsPanel />
      <div className="container" dangerouslySetInnerHTML={{ __html: raw }} />
    </div>
  );
}
