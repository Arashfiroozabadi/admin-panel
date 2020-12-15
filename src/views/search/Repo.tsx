import React, { useState } from "react";
import { Box, FormControl, MenuItem } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";

import { InputLabel, Select, TextField } from "../../components/themed";



type LangType = "C" |
  "C#" | "Go" | "DM" |
  "C++" | "CSS" | "PHP" |
  "Dart" | "HTML" | "Java" |
  "Perl" | "Ruby" | "Rust" |
  "Scala" | "Swift" | "Shell" |
  "Groovy" | "Elixir" | "Kotlin" | "Pyhton" |
  "TypeScript" | "PowerShell" | "JavaScript" |
  "Objective-C" | "CoffeeScript" | ""

const useStyles = makeStyles((theme: Theme) => createStyles({
  box: {
    display: "flex",
    flexDirection: "column",
  },
  inputs: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
}));

function RepoFilters() {
  // Material-UI Hooks
  const classes = useStyles();


  // States
  const [langType, setLangType] = useState<LangType>("");

  // Event Handlers
  const handleChangeLangType = (e: React.ChangeEvent<{ value: unknown }>) => {
    setLangType(e.target.value as LangType);
  };

  return (
    <Box className={classes.box}>
      <TextField
        className={clsx(classes.inputs)}
        variant="outlined"
        placeholder="From these owners"
        label="From these owners"
      />
      <TextField
        className={clsx(classes.inputs)}
        variant="outlined"
        placeholder="In these repositories"
        label="In these repositories"
      />
      <FormControl
        variant="outlined"
        className={clsx(classes.inputs)}
      >
        <InputLabel id="language">
          Written in this language
        </InputLabel>
        <Select
          labelId="language"
          id="demo-simple-select"
          value={langType}
          onChange={handleChangeLangType}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value="C" >
            C
          </MenuItem>
          <MenuItem value="C#" >
            C#
          </MenuItem>
          <MenuItem value="C++" >
            C++
          </MenuItem>
          <MenuItem value="CoffeeScript" >
            CoffeeScript
          </MenuItem>
          <MenuItem value="CSS" >
            CSS
          </MenuItem>
          <MenuItem value="Dart" >
            Dart
          </MenuItem>
          <MenuItem value="DM" >
            DM
          </MenuItem>
          <MenuItem value="Elixir" >
            Elixir
          </MenuItem>
          <MenuItem value="Go" >
            Go
          </MenuItem>
          <MenuItem value="Groovy" >
            Groovy
          </MenuItem>
          <MenuItem value="HTML" >
            HTML
          </MenuItem>
          <MenuItem value="Java" >
            Java
          </MenuItem>
          <MenuItem value="JavaScript" >
            JavaScript
          </MenuItem>
          <MenuItem value="Kotlin" >
            Kotlin
          </MenuItem>
          <MenuItem value="Objective-C" >
            Objective-C
          </MenuItem>
          <MenuItem value="Perl" >
            Perl
          </MenuItem>
          <MenuItem value="PHP" >
            PHP
          </MenuItem>
          <MenuItem value="PowerShell" >
            PowerShell
          </MenuItem>
          <MenuItem value="Pyhton" >
            Pyhton
          </MenuItem>
          <MenuItem value="Ruby" >
            Ruby
          </MenuItem>
          <MenuItem value="Rust" >
            Rust
          </MenuItem>
          <MenuItem value="Scala" >
            Scala
          </MenuItem>
          <MenuItem value="Shell" >
            Shell
          </MenuItem>
          <MenuItem value="Swift" >
            Swift
          </MenuItem>
          <MenuItem value="TypeScript" >
            TypeScript
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default RepoFilters;