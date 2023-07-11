//página footer//
//page footer//
import { retroGames } from "../../assets/img/Index"

export const Footer: React.FC = () => {
  return (
    <>
      <footer className=" py-4 my-4 border-top footer">
        <div className="d-flex p-5 col">
          <p className="p-retro">© 2023 Retro Games Shop, Inc. All rights reserved.</p>
        </div>
        <div className="d-flex col justify-content-end align-items-end"><img className="w-50" src={retroGames} alt="" /></div>
      </footer>
    </>
  )
}
