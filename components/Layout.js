import Breadcrumbs from "nextjs-breadcrumbs"

export default function Layout({title, children }) {
    return (
        <div className="flex min-h-screen w-screen flex-col items-center justify-center py-2 bg-slate-200 font-CourierPrime">
    
            <Breadcrumbs
                containerClassName="font-semibold max-w-fit" //hover:cursor-pointer hover:bg-orange-400
                inactiveItemClassName="inline border-b-2 border-gray-400" 
                activeItemClassName='inline border-b-2 pl-1 border-black'
                rootLabel="~" 
                transformLabel={(title) => (title + " /")}
                replaceCharacterList={[{from:'\n', to: ''}]}
            />
    
          <main className="my-5 md:w-3/5 w-5/6 border-2 p-10 border-black bg-white drop-shadow-xl">
              {children}
          </main>
        </div>
    )
}  