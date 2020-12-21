import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Star } from "@material-ui/icons";
import clsx from "clsx";

import { Divider, Typography } from "../../components/themed";

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
        updatedAt: string
        description: string
        homepageUrl: string
        nameWithOwner: string
        stargazerCount: number
        primaryLanguage: {
          name: string
          color: string
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
    star: {
      display: "flex",
      fontSize: "medium",
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
    langText: {
      fontSize: "small",
    }
  })
);

function SearchResult({ items }: PropTypes) {
  // Material-UI Hooks
  const classes = useStyles();

  if (items.repositoryCount > 0) {
    const repoCount = numberWithCommas(items.repositoryCount);
    return (
      <div className={classes.root} >
        <div className={classes.resultCount} >
          <Typography variant="h5" > {repoCount} repository results</Typography>
        </div>
        {items.edges.map((item) => (
          <div key={item.node.id} >
            <Typography>
              <a href={item.node.url}>
                {item.node.nameWithOwner}
              </a>
            </Typography>
            <div className={classes.itemBody} >
              <Typography variant="body2" >
                {item.node.description}
              </Typography>
            </div>
            <div className={classes.footer} >
              <div className={clsx(classes.footerRow)} >
                <Typography className={classes.star} >
                  <Star
                    fontSize="small"
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
                    <Typography className={classes.langText}>
                      {item.node.primaryLanguage.name}
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