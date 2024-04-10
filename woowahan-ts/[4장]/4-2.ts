// 2)
const replaceHypen = (date: string | Date): string | Date => {
  if (typeof date === "string") {
    return date.replace(/-/g, "/");
  }

  return date;
};

// 3)
interface Range {
  start: Date;
  end: Date;
}

interface DatePickerProps {
  selectedDates?: Date | Range
}

const DatePicker = ({selectedDates} : DatePickerProps) => {
    const [selected, setSelected] = useState(convertToRange(selectedDates))

}
export function convertToTange(selected?: Date | Range): Range | undefined {
    return selected instanceof Date ?(start : selected, end : selected)
    : selected; 
}


// 4)
interface BasicNoticeDialogProps {
    noticeTitle : string;
    noticeBody : string;
}

interface NoticeDialogWithCookieProps extends BasicNoticeDialogProps {
    cookieKey : string;
    noForADay?: boolean;
    neverAgain?: boolean;
}

export type NoticeDialogProps = BasicNoticeDialogProps | NoticeDialogWithCookieProps;

const NoticeDialog : React.FC<NoticeDialogProps> = (props) => {
    if ('cookieKey' in props) return <NoticeDialogWithCookie {...props} />;
    return <BasicNoticeDialog {...props} />;
}

// 5)
const isDestinationCode = (x : string) : x is Destinationcode => 
    destinationCodeList.includes(x)

const getAvailableDestinationNameList = async () : Promise<DestinationName[]> => {
    const data = await AxiosResponse<String[]>("get", ".../destinations");
    const destinationNames : DestinationName[] = []
    data?.forEach((str) => {
        if (isDestinationCode(str)) {
            destinationNames.push(DestinationNameSet[str])
        }
        /**
         * 다음 에러 발생
         * Element implicitly has an 'any' type because expression of type 'string' can't be used to index type
         * 'Record<"MESSAGE_PLATFORM" | "COUPON_PLATFORM" | "BRAZE", "통합메세지플랫폼" | "쿠폰대장간" | "braze">
         */
    })
}