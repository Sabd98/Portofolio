import { projectData, skillsData } from "@/Data/data";

// Strip spaces, dots, and lowercase for robust substring matching
function key(text: string) {
  return text.toLowerCase().replace(/[\s.]/g, "");
}

export function filterProjectsBySkills(selectedSkills: string[]) {
  if (selectedSkills.length === 0) return projectData;
  const skillKeys = selectedSkills.map(key);
  return projectData.filter((p) => {
    const k = key(p.techstacks);
    return skillKeys.some((sk) => k.includes(sk));
  });
}

export function getVisibleSkills() {
  return skillsData.filter((s) => {
    const skillKey = key(s.title);
    return projectData.some((p) => key(p.techstacks).includes(skillKey));
  });
}
