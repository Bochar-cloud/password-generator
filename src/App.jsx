import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import { TbRefresh, TbCopy } from "react-icons/tb";
import { generatePass } from './utils';
import { StatePassText } from './const';

const App = () => {
  const [lengthPass, setLengthPass] = useState(20);
  const [copyText, setCopyText] = useState(StatePassText.Copy);
  const [pass, setPass] = useState('');

  const [optionsPass, setOptionsPass] = useState({
    isUppercase: true,
    isLowercase: true,
    isNumbers: true,
    isSymbols: true,
  });

  useEffect(() => {
    setPass(generatePass(lengthPass, optionsPass));
    setCopyText(StatePassText.Copy);
  }, [lengthPass, optionsPass]);

  const buttonCopyClickHandler = () => {
    navigator.clipboard.writeText(pass);
    setCopyText(StatePassText.Copied);
  };

  const buttonRefreshClickHandler = () => {
    setCopyText(StatePassText.Copy);
    setPass(generatePass(lengthPass, optionsPass));
  };

  return (
    <div className="pass-generator">
      <form className="pass-generator__form form-pass">
        <h1 className="pass-generator__title">Customize your password</h1>
        <div className="form-pass__group">
          <div className="form-pass__slider">
            <span className="form-pass__slider-value">Password length: {lengthPass}</span>
            <Slider min={1} max={50} value={lengthPass} onChange={(evt) => setLengthPass(evt.target.value)} />
          </div>

          <div className="form-pass__checkboxes">
            <FormControlLabel
              label="Use uppercase"
              control={<Checkbox defaultChecked onChange={() => setOptionsPass((prevState) => ({...prevState, isUppercase: !optionsPass.isUppercase}))} />}
            />
            <FormControlLabel
              label="Use lowercase"
              control={<Checkbox defaultChecked onChange={() => setOptionsPass((prevState) => ({...prevState, isLowercase: !optionsPass.isLowercase}))} />}
            />
            <FormControlLabel
              label="Use numbers"
              control={<Checkbox defaultChecked onChange={() => setOptionsPass((prevState) => ({...prevState, isNumbers: !optionsPass.isNumbers}))} />}
            />
            <FormControlLabel
              label="Use symbols"
              control={<Checkbox defaultChecked onChange={() => setOptionsPass((prevState) => ({...prevState, isSymbols: !optionsPass.isSymbols}))} />}
            />
          </div>
        </div>
      </form>

      <div className="pass-generator__output output-pass">
        <div className="output-pass__field">
          <span className="output-pass__field-text">{pass}</span>
          <div className="output-pass__field-controls">
            <Tooltip placement="top" title={copyText}>
              <button className="button-reset" onClick={buttonCopyClickHandler}>
                <TbCopy size="40" />
              </button>
            </Tooltip>
            <Tooltip placement="top" title="Refresh password">
              <button className="button-reset" onClick={buttonRefreshClickHandler}>
                <TbRefresh size="40" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
