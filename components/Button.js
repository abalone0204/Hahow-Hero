const Button = (props) => {
	return (
		<button className={props.category === 'lg' ? 'btn-lg' : 'btn-default'} onClick={props.onClick}>
			{props.children}
			<style jsx>{`
      button:focus {
        outline: 0;
      }
      button:hover {
       background: linear-gradient(#393939, #292929);
       color: #00fffc;
       outline: none;
       transition: 1s all;
      }
      .btn-lg {
        width: 200px;
        height: auto;
      }
      .btn-default {
        width: 40px;
        height: 40px;
      }
      button {
         cursor: pointer;
         background: linear-gradient(#333333, #222222);
         box-sizing: content-box;
         border: 1px solid #444;
         border-left-color: #000;
         border-radius: 5px;
         box-shadow: 0 2px 0 #000;
         color: #fff;
         font-family: 'Cabin', helvetica, arial, sans-serif;
         font-size: 20px;
         font-weight: 400;
         line-height: 40px;
         margin: 15px;
         padding: 0;
         position: relative;
         text-shadow: 0 -1px 0 #000;
         transition: 1s all;
       }
      `}</style>
		</button>
	)
}

export default Button
