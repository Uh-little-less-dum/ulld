import { BibEntryReturned, BibReturnType } from "../../../trpcTypes/main";
import { BibCore } from "../Bib";
import { BibEntry, BibEntryDataTableOutput, BibEntryPrismaAcceptedTypes } from "../BibEntry";
import { CitationGroup } from "../CitationGroup";
import { MdxNote } from "../MdxNote";
import { ReadingList } from "../readingList";
import { Tag } from "../tag";
import { PrismaMdxRelationshipProtocol } from "../type";
import { Prisma } from "@ulld/database/internalDatabaseTypes"



export type BibEntryProps = Omit<Partial<NonNullable<BibEntryReturned>>, "added"> & { Bib?: undefined | BibReturnType, added?: Date | string | undefined } & { [k: string]: any }


export abstract class BibEntryProtocol implements PrismaMdxRelationshipProtocol<Prisma.CitationsGroupDelegate> {

    [s: string]: any
    Bib?: BibCore
    BibId?: number | null
    readingList?: ReadingList[] | undefined | null = []
    OwnWork?: boolean
    ColleaguesWork?: boolean
    read?: boolean
    PdfPath?: string | null
    address?: string | null
    annote?: string | null
    author?: string | null
    booktitle?: string | null
    chapter?: string | null
    crossref?: string | null
    doi?: string | null
    edition?: string | null
    editor?: string | null
    email?: string | null
    howpublished?: string | null
    institution?: string | null
    journal?: string | null
    month?: string | null
    note?: string | null
    number?: string | null
    organization?: string | null
    pages?: string | null
    publisher?: string | null
    school?: string | null
    series?: string | null
    title?: string | null
    volume?: string | null
    type?: string | null
    year?: string | null
    numpages?: string | null
    url?: string | null
    issue?: string | null
    issn?: string | null
    abstract?: string | null
    urldate?: string | null
    keywords?: string | null
    copyright?: string | null
    added: Date | string = new Date()
    citationGroups: CitationGroup[] = []
    tags: Tag[] = []
    MdxNotes: MdxNote[] | null = []
    abstract whereUniqueInput(): Prisma.BibEntryWhereUniqueInput
    abstract whereInput(): Prisma.BibEntryWhereInput
    abstract createInput(): Prisma.BibEntryCreateInput
    abstract createArgs(): Prisma.BibEntryCreateArgs
    abstract upsertArgs(): Prisma.BibEntryUpsertArgs
    abstract connectOrCreateArgs(): Prisma.BibEntryCreateOrConnectWithoutBibInput
    abstract toDataTable(): BibEntryDataTableOutput
    static fromPrisma: (item: BibEntryProps & { id: string }) => BibEntry
    static fromList: (items: BibEntryPrismaAcceptedTypes[] | null | undefined) => BibEntry[]
}
