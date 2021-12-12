export const baseUrl = '/entrez/eutils/';
export const hostname = 'eutils.ncbi.nlm.nih.gov';
export const entryPoints = {
  einfo: `einfo.fcgi?`,
  esearch: `esearch.fcgi?`,
  epost: `epost.fcgi?`,
  esummary: `esummary.fcgi?`,
  efetch: `efetch.fcgi?`,
  elink: `elink.fcgi?`,
  egquery: `egquery.fcgi?`,
  espell: `espell.fcgi?`,
  ecitmatch: `ecitmatch.cgi?`,
};
const dbList: string[] = [
  'pubmed',
  'protein',
  'nuccore',
  'nucleotide',
  'nucgss',
  'nucest',
  'structure',
  'genome',
  'assembly',
  'gcassembly',
  'genomeprj',
  'bioproject',
  'biosample',
  'biosystems',
  'blastdbinfo',
  'books',
  'cdd',
  'clone',
  'gap',
  'gapplus',
  'dbvar',
  'epigenomics',
  'gene',
  'gds',
  'geo',
  'geoprofiles',
  'homologene',
  'journals',
  'medgen',
  'mesh',
  'ncbisearch',
  'nlmcatalog',
  'omia',
  'omim',
  'pmc',
  'popset',
  'probe',
  'proteinclusters',
  'pcassay',
  'pccompound',
  'pcsubstance',
  'pubmedhealth',
  'seqannot',
  'snp',
  'sra',
  'taxonomy',
  'toolkit',
  'toolkitall',
  'unigene',
  'unists',
  'gencoll',
];
export const eEntrezDb = {
  list: dbList,
};
