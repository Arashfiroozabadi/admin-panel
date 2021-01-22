import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Star, InfoOutlined } from "@material-ui/icons";
import clsx from "clsx";

import { useSelector } from "react-redux";

import { Divider, Typography } from "../../components/themed";
import { selectors } from "../../features/counter";
import palette from "../../ui/palette";
import { ImgLoader } from "../../components";

interface PropTypes {
  items: {
    repositoryCount: number
    issueCount: number
    userCount: number
    edges: []
  }
}

interface RepoPropTypes {
  node: {
    id: string
    url: string
    name: string
    issues: {
      totalCount: number
    }
    updatedAt: string
    description: string
    homepageUrl: string
    nameWithOwner: string
    stargazerCount: number
    primaryLanguage: {
      name: string
      color: string
    }
    licenseInfo: {
      name: string
    }
  }
}
interface UserPropTypes {
  node: {
    id: string
    url: string
    bio: string
    email: string
    login: string
    company: string
    userName: string
    location: string
    avatarUrl: string
    followers: {
      totalCount: number
    }
    starredRepositories: {
      totalCount: number
    }
  }
}
interface IssuePropTypes {
  node: {
    id: string
    url: string
    title: string
    number: number
    author: {
      url: string
      login: string
    }
    comments: {
      totalCount: number
    }
    createdAt: string
    repository: {
      url: string
      nameWithOwner: string
    }
  }
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    wrapper: {
      height: 300,
      padding: theme.spacing(1),
      overflow: "hidden scroll",
      boxShadow: theme.shadows[5],
      borderRadius: theme.shape.borderRadius,
    },
    resultCount: {
      padding: "0px 0px 30px 0px"
    },
    card: {
      padding: `${theme.spacing(2)}px 0px`,
    },
    item: {

    },
    itemBody: {
      padding: `0px ${theme.spacing(4)}px`,
    },
    footer: {
      display: "flex",
      padding: `0px ${theme.spacing(4)}px`,
      alignItems: "center",
    },
    footerRow: {
      marginRight: 10
    },
    footerCaptionText: {
      fontSize: "small"
    },
    star: {
      display: "flex",
      alignItems: "center",
    },
    language: {
      display: "flex",
      alignItems: "center",
    },
    langColor: {
      width: 10,
      height: 10,
      border: "1px solid #c6c6c67d",
      display: "inline-block",
      marginRight: 4,
      borderRadius: "50%",
    },
    license: {

    },
    lastUpdate: {

    },
    openIssue: {

    },
    userHeader: {
      display: "flex"
    },
    avatar: {
      marginRight: theme.spacing(1)
    },
    userUrl: {
      marginRight: theme.spacing(1)
    },
    userBio: {
      width: "70%",
      margin: `${theme.spacing(1)}px 0px`
    },
    issueHeader: {
      display: "flex",
      alignItems: "center",
    },
    issueIcon: {
      color: "#22863a",
      marginRight: theme.spacing(1),
    },
    issueHeaderText: {
      marginRight: theme.spacing(1),
    },

    issueLink: {
      // "&:hover": {
      //   color: "#0366d6"
      // }
    },
  })
);

function SearchResult({ items }: PropTypes) {
  // Material-UI Hooks
  const classes = useStyles();

  // Redux States
  const t = useSelector(selectors.getTheme);

  // Respository Result
  if (items.repositoryCount > 0) {
    const repoCount = numberWithCommas(items.repositoryCount);
    return (
      <div className={classes.root} >
        <div className={classes.resultCount} >
          <Typography variant="h5" > {repoCount} repository results</Typography>
        </div>
        <div className={classes.wrapper} >
          {items.edges.map((item: RepoPropTypes) => (
            <div key={item.node.id} >
              <div className={classes.card} >
                {/* Item Header */}
                <Typography gutterBottom>
                  <a href={item.node.url} target="_blanck" >
                    {item.node.nameWithOwner}
                  </a>
                </Typography>

                {/* Item Body */}
                <div className={classes.itemBody} >
                  <Typography variant="body1" gutterBottom >
                    {item.node.description}
                  </Typography>
                </div>

                {/* Item Footer */}
                <div className={classes.footer} >
                  <div className={clsx(classes.footerRow)} >
                    <Typography variant="caption" className={clsx(classes.star, classes.footerCaptionText)}
                      style={{
                        color: palette.text.caption[t]
                      }}
                    >
                      <Star
                        style={{
                          fontSize: "1rem"
                        }}
                        htmlColor="gold"
                      />
                      {makeFriendly(item.node.stargazerCount)}
                    </Typography>
                  </div>
                  <div className={clsx(classes.language, classes.footerRow)}>
                    {item.node.primaryLanguage ?
                      <>
                        <span
                          className={classes.langColor}
                          style={{
                            backgroundColor: item.node.primaryLanguage.color
                          }}
                        />
                        <Typography variant="caption" className={clsx(classes.footerCaptionText)}
                          style={{
                            color: palette.text.caption[t]
                          }}
                        >
                          {item.node.primaryLanguage.name}
                        </Typography>
                      </>
                      : null
                    }
                  </div>
                  <div className={clsx(classes.license, classes.footerRow)} >
                    {item.node.licenseInfo ?
                      <>
                        <Typography variant="caption" className={clsx(classes.footerCaptionText)}
                          style={{
                            color: palette.text.caption[t],
                          }}
                        >
                          {item.node.licenseInfo.name}
                        </Typography>
                      </>
                      : null
                    }
                  </div>
                  <div className={clsx(classes.lastUpdate, classes.footerRow)} >
                    <Typography variant="caption" className={clsx(classes.footerCaptionText)}
                      style={{
                        color: palette.text.caption[t],
                      }}
                    >
                      Updated {new Date(item.node.updatedAt).toLocaleDateString()}
                    </Typography>
                  </div>
                  <div className={clsx(classes.openIssue, classes.footerRow)} >
                    {item.node.issues.totalCount > 0 ?
                      <>
                        <Typography
                          className={clsx(classes.footerCaptionText)}
                          variant="caption"
                          style={{ color: palette.text.caption[t] }}
                        >
                          {item.node.issues.totalCount} issues need help
                    </Typography>
                      </>
                      : null
                    }
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // User Result
  if (items.userCount > 0) {
    const userCount = numberWithCommas(items.userCount);
    return (
      <div className={classes.root} >
        <div className={classes.resultCount} >
          <Typography variant="h5" > {userCount} users</Typography>
        </div>
        <div className={classes.wrapper} >
          {items.edges.map((item: UserPropTypes) => (
            <div key={item.node.id}>
              <div className={classes.card}>
                {/*item Header */}
                <div className={classes.userHeader} >
                  <div className={classes.avatar}>
                    <ImgLoader
                      url={item.node.avatarUrl}
                      alt={item.node.userName}
                      width={30}
                      height={30}
                    />
                  </div>
                  <Typography
                    className={classes.userUrl}
                    component="span"
                  >
                    <a href={item.node.url} target="_blanck" >
                      {item.node.userName}
                    </a>
                  </Typography>
                  <Typography
                    style={{
                      color: palette.text.caption[t]
                    }}
                    component="span"
                  >
                    {item.node.login}
                  </Typography>
                </div>

                {/* Item Body */}
                <div className={classes.itemBody} >
                  <Typography
                    variant="body1"
                    className={classes.userBio}
                    gutterBottom
                  >
                    {item.node.bio}
                  </Typography>
                </div>

                {/* Item Footer */}
                <div className={classes.footer} >
                  <div className={classes.footerRow}>
                    <Typography
                      variant="caption"
                      className={clsx(classes.footerCaptionText)}
                      style={{ color: palette.text.caption[t] }}
                    >
                      {item.node.location}
                    </Typography>
                  </div>
                  <div className={classes.footerRow}>
                    <Typography
                      variant="caption"
                      className={clsx(classes.footerCaptionText)}
                      style={{ color: palette.text.caption[t] }}
                    >
                      {item.node.email}
                    </Typography>
                  </div>
                  <div className={classes.footerRow}>
                    <Typography
                      variant="caption"
                      className={clsx(classes.footerCaptionText)}
                      style={{ color: palette.text.caption[t] }}
                    >
                      {item.node.company}
                    </Typography>
                  </div>
                  <div className={classes.footerRow}>
                    {item.node.followers !== undefined ?
                      <Typography
                        variant="caption"
                        className={clsx(classes.footerCaptionText)}
                        style={{ color: palette.text.caption[t] }}
                      >
                        followers {makeFriendly(item.node.followers.totalCount)}
                      </Typography>
                      : null
                    }

                  </div>
                  <div className={clsx(classes.footerRow)} >
                    {item.node.starredRepositories !== undefined ?
                      <Typography variant="caption" className={clsx(classes.star, classes.footerCaptionText)}
                        style={{
                          color: palette.text.caption[t]
                        }}
                      >
                        <Star
                          style={{
                            fontSize: "1rem"
                          }}
                          htmlColor="gold"
                        />
                        {makeFriendly(item.node.starredRepositories.totalCount)}
                      </Typography>
                      : null
                    }
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Issue Result
  if (items.issueCount > 0) {
    const issueCount = numberWithCommas(items.issueCount);
    return (
      <div className={classes.root} >
        <div className={classes.resultCount} >
          <Typography variant="h5" > {issueCount} issues</Typography>
        </div>
        <div className={classes.wrapper} >
          {items.edges.map((item: IssuePropTypes) => (
            <div key={item.node.id}>
              {!item.node.repository ? null :
                <>
                  <div className={classes.card}>
                    {/*item Header */}
                    <div className={classes.issueHeader}>
                      <InfoOutlined className={classes.issueIcon} />
                      <Typography
                        gutterBottom
                        variant="caption"
                        className={classes.issueHeaderText}
                      >
                        <a
                          rel="noopener noreferrer"
                          href={item.node.repository.url}
                          target="_blank"
                        >
                          {item.node.repository.nameWithOwner}
                        </a>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="caption"
                        className={classes.issueHeaderText}
                      >
                        <a
                          className={classes.issueLink}
                          rel="noopener noreferrer"
                          href={`${item.node.repository.url}/issues`}
                          target="_blank"
                        >
                          #{item.node.number}
                        </a>
                      </Typography>
                    </div>

                    {/* item Body */}
                    <div className={classes.itemBody}>
                      <Typography
                        variant="body1"
                        gutterBottom
                        color="textSecondary"
                      >
                        <a
                          rel="noopener noreferrer"
                          href={item.node.url}
                          target="_blank"
                          style={{
                            color: palette.text[t],
                            textDecoration: "none"
                          }}
                        >
                          {item.node.title}
                        </a>
                      </Typography>
                    </div>
                    {/* Item Footer */}
                    <div className={classes.footer} >
                      <div className={classes.footerRow}>
                        <Typography
                          variant="caption"
                          className={clsx(classes.footerCaptionText)}
                        >
                          <a
                            rel="noopener noreferrer"
                            href={item.node.author.url}
                            target="_blank"
                            style={{ color: palette.text.caption[t] }}
                          >

                            {item.node.author.login}
                          </a>
                        </Typography>
                      </div>
                      <div className={classes.footerRow}>
                        <Typography
                          variant="caption"
                          className={clsx(classes.footerCaptionText)}
                          style={{ color: palette.text.caption[t] }}
                        >
                          opened 13 days ago {new Date(item.node.createdAt).toLocaleDateString()}
                        </Typography>
                      </div>
                      <div className={classes.footerRow}>
                        <Typography
                          variant="caption"
                          className={clsx(classes.footerCaptionText)}
                          style={{ color: palette.text.caption[t] }}
                        >
                          {
                            item.node.comments.totalCount > 0 ?
                              `${item.node.comments.totalCount} comments`
                              : null
                          }
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    null
  );
}


function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function intlFormat(num: number) {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
}
function makeFriendly(num: number) {
  if (num >= 1000000)
    return intlFormat(num / 1000000) + "M";
  if (num >= 1000)
    return intlFormat(num / 1000) + "k";
  return intlFormat(num);
}


export default SearchResult;