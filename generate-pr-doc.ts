// generate-pr-doc.ts
import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { homedir } from "os";

const getGitDiff = () => {
  return execSync("git diff origin/dev...HEAD", { encoding: "utf-8" });
};

const getGitCommits = () => {
  return execSync('git log origin/dev..HEAD --pretty=format:"%h %s"', {
    encoding: "utf-8",
  });
};

const getBranchName = () => {
  return execSync("git rev-parse --abbrev-ref HEAD", {
    encoding: "utf-8",
  }).trim();
};

const getTodayDate = () => {
  return new Date().toISOString().split("T")[0];
};

function savePRRecord() {
  const branch = getBranchName();
  const date = getTodayDate();
  const diff = getGitDiff();
  const commits = getGitCommits();

  const content = `# Branch：${branch}

> 建立時間：${date}

---

## Git Commit 訊息

${commits}

---

## Git Diff

${diff}
`;

  const desktop = `${homedir()}/Desktop`;
  const outputDir = `${desktop}/work/PR記錄`;
  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

  const filename = `${outputDir}/${date}__${branch.replaceAll("/", "_")}.md`;
  writeFileSync(filename, content);

  console.log(`PR 資訊已儲存至：${filename}`);
}

savePRRecord();
