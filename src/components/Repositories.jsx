import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Repo from './Repo'
import './repositories.css'

function Repositories(props) {

  let x = [
    {
      "id": 541516303,
      "node_id": "R_kgDOIEbiDw",
      "name": "btwobfrontend",
      "full_name": "akshaysince98/btwobfrontend",
      "private": false,
      "owner": {
        "login": "akshaysince98",
        "id": 103368747,
        "node_id": "U_kgDOBilIKw",
        "avatar_url": "https://avatars.githubusercontent.com/u/103368747?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/akshaysince98",
        "html_url": "https://github.com/akshaysince98",
        "followers_url": "https://api.github.com/users/akshaysince98/followers",
        "following_url": "https://api.github.com/users/akshaysince98/following{/other_user}",
        "gists_url": "https://api.github.com/users/akshaysince98/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/akshaysince98/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/akshaysince98/subscriptions",
        "organizations_url": "https://api.github.com/users/akshaysince98/orgs",
        "repos_url": "https://api.github.com/users/akshaysince98/repos",
        "events_url": "https://api.github.com/users/akshaysince98/events{/privacy}",
        "received_events_url": "https://api.github.com/users/akshaysince98/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/akshaysince98/btwobfrontend",
      "description": "nullnullnullnu llnullnullnullnu  llnullnul lnullnullnullnull null nullnull nullnullnullnullnull",
      "fork": false,
      "url": "https://api.github.com/repos/akshaysince98/btwobfrontend",
      "forks_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/forks",
      "keys_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/teams",
      "hooks_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/hooks",
      "issue_events_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/issues/events{/number}",
      "events_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/events",
      "assignees_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/assignees{/user}",
      "branches_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/branches{/branch}",
      "tags_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/tags",
      "blobs_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/languages",
      "stargazers_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/stargazers",
      "contributors_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/contributors",
      "subscribers_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/subscribers",
      "subscription_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/subscription",
      "commits_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/contents/{+path}",
      "compare_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/merges",
      "archive_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/downloads",
      "issues_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/issues{/number}",
      "pulls_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/labels{/name}",
      "releases_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/releases{/id}",
      "deployments_url": "https://api.github.com/repos/akshaysince98/btwobfrontend/deployments",
      "created_at": "2022-09-26T09:56:06Z",
      "updated_at": "2022-09-26T15:46:05Z",
      "pushed_at": "2022-09-29T10:28:59Z",
      "git_url": "git://github.com/akshaysince98/btwobfrontend.git",
      "ssh_url": "git@github.com:akshaysince98/btwobfrontend.git",
      "clone_url": "https://github.com/akshaysince98/btwobfrontend.git",
      "svn_url": "https://github.com/akshaysince98/btwobfrontend",
      "homepage": null,
      "size": 830,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "topics": [],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master"
    },
    {
      "id": 532903118,
      "node_id": "R_kgDOH8N0zg",
      "name": "custom-drive",
      "full_name": "akshaysince98/custom-drive",
      "private": false,
      "owner": {
        "login": "akshaysince98",
        "id": 103368747,
        "node_id": "U_kgDOBilIKw",
        "avatar_url": "https://avatars.githubusercontent.com/u/103368747?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/akshaysince98",
        "html_url": "https://github.com/akshaysince98",
        "followers_url": "https://api.github.com/users/akshaysince98/followers",
        "following_url": "https://api.github.com/users/akshaysince98/following{/other_user}",
        "gists_url": "https://api.github.com/users/akshaysince98/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/akshaysince98/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/akshaysince98/subscriptions",
        "organizations_url": "https://api.github.com/users/akshaysince98/orgs",
        "repos_url": "https://api.github.com/users/akshaysince98/repos",
        "events_url": "https://api.github.com/users/akshaysince98/events{/privacy}",
        "received_events_url": "https://api.github.com/users/akshaysince98/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/akshaysince98/custom-drive",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/akshaysince98/custom-drive",
      "forks_url": "https://api.github.com/repos/akshaysince98/custom-drive/forks",
      "keys_url": "https://api.github.com/repos/akshaysince98/custom-drive/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/akshaysince98/custom-drive/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/akshaysince98/custom-drive/teams",
      "hooks_url": "https://api.github.com/repos/akshaysince98/custom-drive/hooks",
      "issue_events_url": "https://api.github.com/repos/akshaysince98/custom-drive/issues/events{/number}",
      "events_url": "https://api.github.com/repos/akshaysince98/custom-drive/events",
      "assignees_url": "https://api.github.com/repos/akshaysince98/custom-drive/assignees{/user}",
      "branches_url": "https://api.github.com/repos/akshaysince98/custom-drive/branches{/branch}",
      "tags_url": "https://api.github.com/repos/akshaysince98/custom-drive/tags",
      "blobs_url": "https://api.github.com/repos/akshaysince98/custom-drive/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/akshaysince98/custom-drive/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/akshaysince98/custom-drive/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/akshaysince98/custom-drive/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/akshaysince98/custom-drive/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/akshaysince98/custom-drive/languages",
      "stargazers_url": "https://api.github.com/repos/akshaysince98/custom-drive/stargazers",
      "contributors_url": "https://api.github.com/repos/akshaysince98/custom-drive/contributors",
      "subscribers_url": "https://api.github.com/repos/akshaysince98/custom-drive/subscribers",
      "subscription_url": "https://api.github.com/repos/akshaysince98/custom-drive/subscription",
      "commits_url": "https://api.github.com/repos/akshaysince98/custom-drive/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/akshaysince98/custom-drive/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/akshaysince98/custom-drive/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/akshaysince98/custom-drive/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/akshaysince98/custom-drive/contents/{+path}",
      "compare_url": "https://api.github.com/repos/akshaysince98/custom-drive/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/akshaysince98/custom-drive/merges",
      "archive_url": "https://api.github.com/repos/akshaysince98/custom-drive/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/akshaysince98/custom-drive/downloads",
      "issues_url": "https://api.github.com/repos/akshaysince98/custom-drive/issues{/number}",
      "pulls_url": "https://api.github.com/repos/akshaysince98/custom-drive/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/akshaysince98/custom-drive/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/akshaysince98/custom-drive/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/akshaysince98/custom-drive/labels{/name}",
      "releases_url": "https://api.github.com/repos/akshaysince98/custom-drive/releases{/id}",
      "deployments_url": "https://api.github.com/repos/akshaysince98/custom-drive/deployments",
      "created_at": "2022-09-05T13:01:30Z",
      "updated_at": "2022-09-05T13:02:51Z",
      "pushed_at": "2022-09-21T07:31:00Z",
      "git_url": "git://github.com/akshaysince98/custom-drive.git",
      "ssh_url": "git@github.com:akshaysince98/custom-drive.git",
      "clone_url": "https://github.com/akshaysince98/custom-drive.git",
      "svn_url": "https://github.com/akshaysince98/custom-drive",
      "homepage": null,
      "size": 8,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "topics": [],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "main"
    }
  ]

  const [pagen, setPagen] = useState(1)

  const [reparray, setArray] = useState([])
  const [loading, setLoading] = useState(false)

  let num = props.num
  let i = 1
  let parr = [1]
  while (num > 10) {
    num -= 10
    i++
    parr.push(i)
  }



  useEffect(() => {

    (async () => {
      setLoading(true)
      let alldata = await axios.get(props.allrepos)
      alldata= alldata.data
      // let alldata = x
      let first = (pagen - 1) * 10

      let narr = []
      for (let i = 0; i < 10; i++) {
        narr[i] = alldata[first]
        first++
      }
      console.log(narr)
      setArray(narr)
      setLoading(false)
    })()


  }, [pagen, props.allrepos])


  return (
    <>



      <div className="reps">
        {reparray.map((r, i) => <Repo key={i} data={r} loading={loading} />)}
      </div>
      <div className='pagination'>
        {parr.map((p, i) =>
          <div key={i} className="page" onClick={() => setPagen(p)}>{p}</div>
        )}
      </div>

    </>
  )
}

export default Repositories