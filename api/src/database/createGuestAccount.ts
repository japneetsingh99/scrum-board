import { Comment, Issue, Project, User } from 'entities';
import { ProjectCategory } from 'constants/projects';
import { IssueType, IssueStatus, IssuePriority } from 'constants/issues';
import { createEntity } from 'utils/typeorm';

const seedUsers = (): Promise<User[]> => {
  const users = [
    createEntity(User, {
      email: 'ishmeet630@gmail.com',
      name: 'Ishmeet Singh',
      avatarUrl: 'https://i.ibb.co/qM7YRcs/Screenshot-20220114-204526-01.jpg',
    }),
    createEntity(User, {
      email: 'japneetsingh2730@gmail.com',
      name: 'Japneet Singh',
      avatarUrl: 'https://i.ibb.co/X4bybXv/Passport-size-photo.jpg',
    }),
    createEntity(User, {
      email: 'jasraj2509@gmail.com',
      name: 'Jas Raj Singh',
      avatarUrl: 'https://i.ibb.co/nMXMrxP/jasraj-pic.jpg',
    }),
    createEntity(User, {
      email: 'kunwarpalsinghsethi13@gmail.com',
      name: 'Kunwarpal Singh',
      avatarUrl: 'https://i.ibb.co/31dSF2m/KPS-edit.jpg',
    }),
  ];
  return Promise.all(users);
};

const seedProject = (users: User[]): Promise<Project> =>
  createEntity(Project, {
    name: 'Minor Project',
    url: 'https://www.atlassian.com/software/jira',
    description:
      'Plan, track, and manage your agile and software development projects in Scrum Board. Customize your workflow, collaborate, and release great software.',
    category: ProjectCategory.SOFTWARE,
    users,
  });

const seedIssues = (project: Project): Promise<Issue[]> => {
  const { users } = project;

  const issues = [
    createEntity(Issue, {
      title: 'This is an issue of type: Task.',
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGH,
      listPosition: 1,
      description: `<p>Your teams can collaborate in Scrum Board applications by breaking down pieces of work into issues. Issues can represent tasks, software bugs, feature requests or any other type of project work.</p><p><br></p><h3>Scrum Board Software&nbsp;(software projects) issue types:</h3><p><br></p><h1><strong>Bug </strong><span style="background-color: initial;">🐞</span></h1><p>A bug is a problem which impairs or prevents the functions of a product.</p><p><br></p><h1><strong>Story </strong><span style="color: rgb(51, 51, 51);">📗</span></h1><p>A user story is the smallest unit of work that needs to be done.</p><p><br></p><h1><strong>Task </strong><span style="color: rgb(51, 51, 51);">🗳</span></h1><p>A task represents work that needs to be done.</p>`,
      estimate: 8,
      timeSpent: 4,
      reporterId: users[1].id,
      project,
      users: [users[0]],
    }),
    createEntity(Issue, {
      title: "Click on an issue to see what's behind it.",
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.LOW,
      listPosition: 2,
      description: `<h2>Key terms to know</h2><p><br></p><h3>Issues</h3><p>A 'issue' refers to a single work item of any type or size that is tracked from creation to completion. For example, an issue could be a feature being developed by a software team, a to-do item for a marketing team, or a contract that needs to be written by a legal team.</p><p><br></p><h3>Projects</h3><p>A project is, quite simply, a collection of issues that are held in common by purpose or context. Issues grouped into projects can be configured in a variety of ways, ranging from visibility restrictions to available workflows.</p><p><br></p><h3>Workflows</h3><p>Workflows represent the&nbsp;sequential&nbsp;path an issues takes from creation to completion. A basic workflow might look something like this:</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:6203a73b-f2a1-4d91-9587-bc4b7d822d6b/workflow_timeline_desktop-temporary.svg?cdnVersion=736" alt="Jira workflow diagram"></p><p><br></p><p>In this case, Open, Done, and the labels in between represent the status an issue can take, while the arrows represent potential transitions from one status to another.</p>`,
      estimate: 5,
      timeSpent: 2,
      reporterId: users[2].id,
      project,
      users: [users[0]],
    }),
    createEntity(Issue, {
      title: 'Try dragging issues to different columns to transition their status.',
      type: IssueType.STORY,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.MEDIUM,
      listPosition: 3,
      description: `<p>An issue's status indicates its current place in the project's workflow. Here's a list of the statuses that come with&nbsp;our product, depending on what projects you've created on your site.</p><p><br></p><h3>Jira software issue statuses:</h3><p><br></p><h2><strong style="background-color: rgb(187, 187, 187);"> Backlog </strong></h2><p>The issue is waiting to be picked up in a future sprint.</p><p><br></p><h2><strong style="background-color: rgb(187, 187, 187);"> Selected </strong></h2><p>The issue is open and ready for the assignee to start work on it.</p><p><br></p><h2><strong style="background-color: rgb(0, 102, 204); color: rgb(255, 255, 255);"> In Progress </strong></h2><p>This issue is being actively worked on at the moment by the assignee.</p><p><br></p><h2><strong style="background-color: rgb(0, 138, 0); color: rgb(255, 255, 255);"> Done </strong></h2><p>Work has finished on the issue.</p>`,
      estimate: 15,
      timeSpent: 12,
      reporterId: users[1].id,
      project,
    }),
    createEntity(Issue, {
      title: 'Each issue can be assigned priority from lowest to highest.',
      type: IssueType.TASK,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGHEST,
      listPosition: 5,
      description: `<p>An issue's priority indicates its relative importance. The default priorities are listed below. Both the priorities and their meanings can be&nbsp;customized by your administrator to suit your organization.&nbsp;<a href="https://confluence.atlassian.com/adminjiracloud/configuring-statuses-resolutions-and-priorities-776636333.html" rel="noopener noreferrer" target="_blank">Learn more about configuring priorities and their descriptions</a>.</p><p><br></p><p><br></p><h3><strong style="background-color: rgb(230, 0, 0); color: rgb(255, 255, 255);"> Highest </strong><strong style="color: rgb(255, 255, 255);"> </strong><span style="color: rgb(51, 51, 51);">⬆️</span></h3><p>This problem will block progress.</p><p><br></p><h3><strong style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> High </strong><strong style="color: rgb(255, 255, 255);"> </strong><span style="color: rgb(51, 51, 51);">⬆️</span></h3><p>Serious problem that could block progress.</p><p><br></p><h3><strong style="background-color: rgb(255, 153, 0); color: rgb(255, 255, 255);"> Medium </strong><strong style="color: rgb(255, 255, 255);"> </strong><span style="color: rgb(51, 51, 51);">⬆️</span></h3><p>Has the potential to affect progress.</p><p><br></p><h3><strong style="background-color: rgb(0, 138, 0); color: rgb(255, 255, 255);"> Low </strong><strong style="color: rgb(255, 255, 255);"> </strong><span style="color: rgb(51, 51, 51);">⬇️</span></h3><p>Minor problem or easily worked around.</p><p><br></p><h3><strong style="background-color: rgb(102, 185, 102); color: rgb(255, 255, 255);"> Lowest </strong><strong style="color: rgb(255, 255, 255);"> </strong><span style="color: rgb(51, 51, 51);">⬇️</span></h3><p>Trivial problem with little or no impact on progress.</p>`,
      estimate: 4,
      timeSpent: 1,
      reporterId: users[2].id,
      project,
    }),
    createEntity(Issue, {
      title: 'Each issue has a single reporter but can have multiple assignees.',
      type: IssueType.STORY,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGH,
      listPosition: 6,
      description: `<h2>Try assigning <u style="background-color: rgb(204, 232, 204);">Jasraj Singh</u> to this issue. <span style="color: rgb(51, 51, 51);"></span></h2><p><br></p>`,
      estimate: 6,
      timeSpent: 3,
      reporterId: users[3].id,
      project,
      users: [users[1], users[3]],
    }),
    createEntity(Issue, {
      title:
        'You can track how many hours were spent working on an issue, and how many hours remain.',
      type: IssueType.TASK,
      status: IssueStatus.INPROGRESS,
      priority: IssuePriority.LOWEST,
      listPosition: 7,
      description: `<p>Before you start work on an issue, you can set a time or other type of estimate to calculate how much work you believe it'll take to resolve it. Once you've started to work on a specific issue, log time to keep a record of it.</p><p><br></p><ul><li>Open the issue and select&nbsp;&nbsp;Time tracking</li><li>Fill in the<strong>&nbsp;Time Spent</strong>&nbsp;field</li><li>Fill in the <strong>Time Remaining</strong> field and click Save</li></ul><p><br></p><h3><u style="background-color: initial;">That's it!</u></h3>`,
      estimate: 12,
      timeSpent: 11,
      reporterId: users[0].id,
      project,
      users: [users[2]],
    }),
    createEntity(Issue, {
      title: 'Try leaving a comment on this issue.',
      type: IssueType.TASK,
      status: IssueStatus.DONE,
      priority: IssuePriority.MEDIUM,
      listPosition: 7,
      description: `<p>Adding comments to an issue is a useful way to record additional detail about an issue, and collaborate with team members. Comments are shown in the&nbsp;<strong>Comments</strong>&nbsp;section when you&nbsp;<a href="https://confluence.atlassian.com/jira064/what-is-an-issue-720416138.html" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 82, 204); background-color: rgb(255, 255, 255);">view an issue</a>.`,
      estimate: 10,
      timeSpent: 2,
      reporterId: users[0].id,
      project,
      users: [users[1]],
    }),
  ];
  return Promise.all(issues);
};

const seedComments = (issues: Issue[], users: User[]): Promise<Comment[]> => {
  const comments = [
    createEntity(Comment, {
      body: 'This is our...\n temporary,\n comment.',
      issueId: issues[0].id,
      userId: users[2].id,
    })
  ];
  return Promise.all(comments);
};

const createGuestAccount = async (): Promise<User> => {
  const users = await seedUsers();
  const project = await seedProject(users);
  const issues = await seedIssues(project);
  await seedComments(issues, project.users);
  return users[1];
};

export default createGuestAccount;
