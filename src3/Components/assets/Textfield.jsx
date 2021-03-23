import React from "react";

function Textfield({ cs, ph, onchange, type }) {
  if (type === "email")
    return (
      <div className={cs} key={ph}>
        <input
          placeholder={ph}
          onChange={({ currentTarget: { value } }) =>
            onchange(value, cs.split(" ")[0])
          }
          type="email"
          required
        />
      </div>
    );

  if (type === "text")
    return (
      <div className={cs} key={ph}>
        <input
          placeholder={ph}
          onChange={({ currentTarget: { value } }) =>
            onchange(value, cs.split(" ")[0])
          }
        />
      </div>
    );
}

function Textarea({ cs, ph, onchange }) {
  return (
    <div className={cs} key={ph}>
      <textarea
        placeholder={ph}
        onChange={({ currentTarget: { value } }) =>
          onchange(value, cs.split(" ")[0])
        }
      />
    </div>
  );
}

export { Textarea, Textfield };
