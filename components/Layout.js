import Breadcrumbs from "nextjs-breadcrumbs"

export default function Layout({title, width, children }) {
    if (width === "") {
        width = '3/5'
    }
    return (
        <div className="flex min-h-screen w-screen flex-col items-center justify-center py-2 bg-slate-200 font-CourierPrime">
    
            <Breadcrumbs
                containerClassName="font-semibold max-w-fit mt-6" //hover:cursor-pointer hover:bg-orange-400
                inactiveItemClassName="inline border-b-2 pl-1 border-black" 
                activeItemClassName='inline border-b-2 pl-1 border-amber-400'
                rootLabel="~" 
                transformLabel={(title) => (title + "/")}
                replaceCharacterList={[{from:'\n', to: ''}]}
            />
    
          <main className={`my-5 md:w-${width} w-11/12 border-2 p-2 border-black bg-white drop-shadow-xl`}>
              {children}
          </main>
        </div>
    )
}  