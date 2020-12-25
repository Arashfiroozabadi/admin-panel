import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Star } from "@material-ui/icons";
import clsx from "clsx";

import { useSelector } from "react-redux";

import { Divider, Typography } from "../../components/themed";
import { selectors } from "../../features/counter";
import palette from "../../ui/palette";

interface PropTypes {
  items: {
    repositoryCount: number
    issueCount: number
    userCount: number
    edges: [{
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
    }]
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    resultCount: {
      padding: "15px 0px"
    },
    item: {

    },
    itemBody: {
      padding: "0px 10px",
    },
    footer: {
      display: "flex",
      alignItems: "center",
    },
    footerRow: {
      margin: "0px 10px"
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

    }
  })
);

function SearchResult({ items }: PropTypes) {
  // Material-UI Hooks
  const classes = useStyles();

  // Redux States
  const t = useSelector(selectors.getTheme);

  if (items.repositoryCount > 0) {
    const repoCount = numberWithCommas(items.repositoryCount);
    return (
      <div className={classes.root} >
        <div className={classes.resultCount} >
          <Typography variant="h5" > {repoCount} repository results</Typography>
        </div>
        {items.edges.map((item) => (
          <div key={item.node.id} >
            {/* Item Header */}
            <Typography>
              <a href={item.node.url}>
                {item.node.nameWithOwner}
              </a>
            </Typography>

            {/* Item Body */}
            <div className={classes.itemBody} >
              <Typography variant="body1" >
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
            <Divider />
          </div>
        ))}
      </div>
    );
  }

  if (items.userCount > 0) {
    return (
      <div>repos</div>
    );
  }

  if (items.issueCount > 0) {
    return (
      <div>repos</div>
    );
  }

  return (
    <div>
      <Typography>
        {items.edges.map((item: any) => {

          if (item.node.nameWithOwner) {
            return (
              <div key={item.node.id}>
                Search result counts : {items.repositoryCount}
                <div>
                  {item.node.nameWithOwner}
                </div>
              </div>
            );
          }


        })}
      </Typography>
    </div>
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