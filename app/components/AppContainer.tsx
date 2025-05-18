interface AppContainerProps {
    children: React.ReactNode;
    header?: boolean;
    headerText?: string;
  }

export default function AppContainer({
  children,
  header = false,
  headerText = "",
}: Readonly<AppContainerProps>) {
  return (
    <div>
        <div className="bg-black pb-1 pr-1">
            <div className="bg-white pl-1 pt-1">
                <div className="bg-[#88878D] pb-1 pr-1">
                    <div className={`bg-[#C5C5CA] p-1`}>
                        {
                            header && <p className="text-3xl pl-1 py-2">{headerText}</p>
                        }
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}