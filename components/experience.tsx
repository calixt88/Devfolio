import { AzureIcon, CIcon, CPPIcon, CSharpIcon, DotNetCoreIcon, DotNetIcon, JavaIcon, JavaScriptIcon, MongoDBIcon, PythonIcon, ReactIcon, FlutterIcon, AndroidIcon, SQLIcon} from "@/components/icons";
import { title } from "@/components/primitives";

export const Experience = () => {
    return (
        <>
            <div className="text-center mt-40 bg-transparent">
                <h1 className={title({ size: "lg", color: "foreground" })}>Experience</h1>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-8 mt-8 mx-auto" style={{ maxWidth: '1000px' }}>
                <CIcon className="w-28 h-28" />
                <CPPIcon className="w-28 h-28" />
                <CSharpIcon className="w-28 h-28" />
                <PythonIcon className="w-28 h-28" />
                <JavaIcon className="w-28 h-28" />
                <JavaScriptIcon className="w-28 h-28" />
                <SQLIcon className="w-28 h-28" />
                <DotNetIcon className="w-28 h-28" />
                <DotNetCoreIcon className="w-28 h-28" />
                <ReactIcon className="w-28 h-28" />
                <FlutterIcon className="w-28 h-28" />
                <AzureIcon className="w-28 h-28" />
                <MongoDBIcon className="w-28 h-28" />
                <AndroidIcon className="w-28 h-28" />
            </div>
        </>
    );
};

export default Experience;


